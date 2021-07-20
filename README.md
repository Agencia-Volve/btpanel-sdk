# **BT-PANEL SDK**

[BT-PANEL](https://bt.cn/) or [aaPanel](https://aapanel.com/)

SDK for access all api endpoints in panel.

How use 

```bash
yarn add btpanel-node-sdk

# Or

npm install btpanel-node-sdk
```

```javascript
import { getDiskInfo, Login } from 'btpanel-node-sdk';

// Under construction. Totally temporary
Login.secret_key = 'secret';
Login.URL = 'http://000.00.000.000:0000';

// You may use Promises or Aysnc/Await.

getListOfWebsites().then((resp) => console.log(resp.data[0].name));
// Return: example.com

```

Documentation coming soon.

⚠ Under construction.