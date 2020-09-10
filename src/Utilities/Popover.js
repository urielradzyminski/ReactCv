import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';
const PopTooltip = (props) => {
    return( 
        <OverlayTrigger
            trigger="click"
            key={props.placement}
            placement={props.placement}
            overlay={
                <Popover id={`popover-positioned-${props.placement}`}>
                <Popover.Title as="h3">{props.title}</Popover.Title>
                <Popover.Content>
                    {props.content}
                </Popover.Content>
                </Popover>
            }
            >
            <div style={{cursor:"pointer"}}>{props.children}</div>
        </OverlayTrigger>
    );
}

export default PopTooltip;