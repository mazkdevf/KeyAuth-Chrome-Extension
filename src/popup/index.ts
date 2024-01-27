import './index.css'
import packageData from '../../package.json'

let AppName = packageData.KeyAuth.AppName;
let OwnerId = packageData.KeyAuth.OwnerId;
let Version = packageData.KeyAuth.Version;

const init = async () => {
  const response = await fetch(`https://keyauth.win/api/1.2/?type=init&ver=${Version}&name=${AppName}&ownerid=${OwnerId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  if (data.success) {
    await chrome.storage.local.set({ sessionId: data.sessionid })
  } else {
    alert(data.message)
  }
}

async function getSessionId() {
  const { sessionId } = await chrome.storage.local.get('sessionId');
  return sessionId;
}

async function initializeSession() {
  console.log("Initializing...");
  await init();
  const sessionId = await getSessionId();
  if (sessionId === undefined) {
    alert('Error while initializing');
    return false;
  }
  return true;
}

async function waitForSessionId() {
  let sessionId;
  while (!sessionId) {
    sessionId = await getSessionId();
    if (!sessionId) {
      console.log("Waiting for session ID...");
      await new Promise(r => setTimeout(r, 500));
    }
  }
  console.log("Session ID received:", sessionId);
  return sessionId;
}

document.addEventListener('DOMContentLoaded', async () => {
  let sessionId = await getSessionId();
  if (sessionId === undefined) {
    const success = await initializeSession();
    if (!success) return;
  }
  sessionId = await waitForSessionId();

  const appElement = document.getElementById('app')!;

  const mainElement = document.createElement('div');
  mainElement.className = 'container';

  const h3Element = document.createElement('h3');
  h3Element.textContent = 'Login example';

  const usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.id = 'username';
  usernameInput.placeholder = 'Username';

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.id = 'password';
  passwordInput.placeholder = 'Password';

  const loginButton = document.createElement('button');
  loginButton.textContent = 'Login';

  mainElement.appendChild(h3Element);
  mainElement.appendChild(usernameInput);
  mainElement.appendChild(passwordInput);
  mainElement.appendChild(loginButton);

  appElement.appendChild(mainElement);

  loginButton.addEventListener('click', async function () {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    fetch(`https://keyauth.win/api/1.2/?type=login&username=${username}&pass=${password}&name=${AppName}&ownerid=${OwnerId}&sessionid=${sessionId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(async data => {
        if (data.success) {
          chrome.storage.local.set({ login: data.info })
          alert('Logged in!')
        } else {
          alert(data.message)
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
})
