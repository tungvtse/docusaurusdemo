// Libraries
import React from 'react';
import styled from 'styled-components'

// Components
import AntdButton, { ButtonProps as AntdButtonProps } from 'antd/lib/button';

// Css
import tw from 'twin.macro';



export interface ButtonProps extends AntdButtonProps {
    children?: React.ReactNode;
}

 const Button: React.FC<ButtonProps> = styled(AntdButton)`
    background-color: #005fb8;
    color:white;
 `;

 export default function DocsButton({props, onClick}): JSX.Element {
    return (
        <Button type='primary' onClick={onClick}>{props}</Button>
    )
 }

 