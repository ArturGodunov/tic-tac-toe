import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/icons/Menu';

const StayVisible = styled.div`
    position: absolute;
    margin-left: ${props => props.open ? `${props.width}px` : 'none'};
    transition: margin .2s;
    z-index: 10000;
`;

export const NavToggleButton = props => (
    <StayVisible {...props}>
        <Button
            variant='fab'
            color='primary'
            onClick={props.toggle}
        >
            <Menu />
        </Button>
    </StayVisible>
);