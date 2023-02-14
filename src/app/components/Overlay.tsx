'use client';

import type { ReactNode } from "react";
import Icon from "./Icon";

interface IProps {
  title: string;
  children: ReactNode;
  onClose: VoidFunction;
}

export default function Overlay({ title, children, onClose }: IProps) {
  return (
    <div className="fixed flex justify-center items-center inset-0 w-screen h-screen">
      <div className="absolute inset-0 bg-black bg-opacity-10" onClick={onClose} />
      <div className="absolute z-50 w-[25rem] px-6 mx-auto">
        <div className="w-full bg-white rounded-lg p-6">
          <div className="flex justify-between">
            <h4 className="text-gray-uno text-[1.375rem] leading-[2rem] font-bold tracking-wide">{title}</h4>
            <button onClick={onClose}><Icon kind="close" size={24} /></button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
