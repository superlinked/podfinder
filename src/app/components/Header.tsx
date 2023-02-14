'use client';

import { IState, useStore } from "../store";
import Button from "./Button";
import Icon from "./Icon";
import Logo from "./Logo";

export default function Header() {
  const { setIsAddHandleOpen, setIsAboutOpen } = useStore<IState>((state: any) => state)

  function onLogoClick() {
    setIsAboutOpen(true)
  }

  function onToggleMenu() {
    setIsAddHandleOpen(true)
  }

  return (
    <header className="flex justify-between p-6 border-b border-gray-cuatro">
      <button onClick={onLogoClick}>
        <Logo />
      </button>

      <div className="flex space-x-3 relative -right-1">
        <Button title="Add Twitter" icon={{ kind: 'at', size: 24 }} onClick={() => { setIsAddHandleOpen(true) }} />
        <button onClick={onToggleMenu}>
          <Icon kind="menu" size={24} />
        </button>
      </div>
    </header>
  )
}
