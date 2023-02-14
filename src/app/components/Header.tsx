'use client';

import { useState } from "react";
import { IState, useStore } from "../store";
import Button from "./Button";
import Icon from "./Icon";
import Logo from "./Logo";

export default function Header() {
  const { setIsAddHandleOpen, setIsAboutOpen } = useStore<IState>((state: any) => state)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  function onLogoClick() {
    setIsAboutOpen(true)
  }

  function onToggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed w-full max-w-[25rem] top-0 p-6 border-b border-gray-cuatro bg-white">
      <div className="flex justify-between">
        <button onClick={onLogoClick}>
          <Logo />
        </button>
        <div className="flex space-x-3 relative -right-1">
          <Button title="Add Twitter" icon={{ kind: 'at', size: 24 }} onClick={() => { setIsAddHandleOpen(true) }} />
          <button onClick={onToggleMenu}>
            <Icon kind={isMenuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mt-10 flex flex-col space-y-6">
          <Button type="white" title="Contribute to Podfinder on GitHub" icon={{ kind: 'github', size: 16 }} onClick={() => { }} />
          <Button type="white" title="Clear personalization" icon={{ kind: 'clear-personalization', size: 16 }} onClick={() => { }} />
        </div>
      )}
    </header>
  )
}
