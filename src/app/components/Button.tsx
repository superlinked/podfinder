'use client';

import React from 'react';
import { twMerge } from 'tailwind-merge';
import { IconKind } from '../types';
import Icon from './Icon';

interface IProps {
  title: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  icon?: {
    kind: IconKind;
    size: number;
  }
  css?: string;
  onClick: VoidFunction;
}

export default function Button({ title, icon, isDisabled = false, isLoading = false, css = '', onClick }: IProps) {
  return (
    <button
      className={twMerge(
        'min-w-[8-rem] relative px-2 py-[0.625rem] rounded-lg transition-colors',
        'text-white bg-blue-500 hover:brightness-90',
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

      <div className='flex items-center space-x-2 text-sm text-center font-bold leading-none'>
        {icon && (
          <Icon kind={icon.kind} size={icon.size} />
        )}
        {title}
      </div>
    </button>
  )
}