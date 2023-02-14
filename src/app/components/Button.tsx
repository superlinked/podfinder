'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IconKind } from '../types';
import Icon from './Icon';

interface IProps {
  type?: 'default' | 'white'
  title: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  icon?: {
    kind: IconKind;
    size: number;
  }
  leftAlign?: boolean;
  css?: string;
  onClick: VoidFunction;
}

export default function Button({ type = 'default', title, icon, isDisabled = false, isLoading = false, leftAlign = false, css = '', onClick }: IProps) {
  return (
    <button
      className={twMerge(
        'min-w-[8-rem] relative px-2 py-[0.625rem] rounded-lg transition-colors',
        type === 'default' && 'text-white bg-blue-500 hover:brightness-90',
        type === 'white' && 'text-gray-tres bg-white hover:brightness-95 border border-gray-cuatro py-3',
        (isDisabled || isLoading) && 'opacity-60 cursor-not-allowed',
        css
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      {isLoading && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          {/* <Spinner css="w-4 h-4 text-gray-500 fill-white" /> */}
          spinner
        </div>
      )}

      <div className={twMerge('w-full flex justify-center items-center space-x-2 text-sm font-bold leading-none', leftAlign && 'justify-start')}>
        {icon && (
          <Icon kind={icon.kind} size={icon.size} />
        )}
        <span>{title}</span>
      </div>
    </button>
  )
}