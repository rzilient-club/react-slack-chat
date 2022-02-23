import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactSlackChat from '../ReactSlackChat/ReactSlackChat';

function App() {
  const [open, setOpen] = React.useState(false);

  const pruebaFn = () => {
    setOpen((myVar) => !myVar);
    console.log(open);
  };
  return (
    <>
      <button onClick={pruebaFn}>CLICK</button>
      <ReactSlackChat
        botName="Rzilio"
        helpText="Rzilient Support"
        apiToken={process.env.REACT_APP_SLACK_BOT}
        singleUserMode
        tsNewChat={0.0000012}
        closeChatButton
        messageSupportChat=""
        openSupportChat={open}
        channels={[
          {
            name: 'tech_live_status',
            id: 'C01HTA4LTRQ',
          },
        ]}
        themeColor="#172b58"
        userImage="http://www.iconshock.com/img_vista/FLAT/mail/jpg/robot_icon.jpg"
        systemImage="chat_logo_128.png"
        hooks={[
          {
            /* My Custom Hook */
            id: 'getSystemInfo',
            action: () => Promise.resolve('MY SYSTEM INFO!'),
          },
        ]}
      />
    </>
  );
}

export default App;
