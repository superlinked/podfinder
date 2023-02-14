'use client';

import Button from "./Button";
import Icon from "./Icon";
import Logo from "./Logo";

export default function Header() {
  function onLogoClick() {
    console.log('logo click');
  }

  function onToggleMenu() {
    console.log('menu click');
  }

  return (
    <header className="flex justify-between p-6 mb-6 border-b border-gray-cuatro">
      <button onClick={onLogoClick}>
        <Logo />
      </button>

      <div className="flex space-x-3 relative right-[-5px]">
        <Button title="Add Twitter" icon={{ kind: 'at', size: 24 }} onClick={() => { console.log('click'); }} />
        <button onClick={onToggleMenu}>
          <Icon kind="menu" size={24} />
        </button>
      </div>
    </header>
  )
}
