
import React from 'react';
import { Button, ButtonLink } from 'design-tokens';

export default {
  title: 'Button',
  component: Button,
};

export const withText = () => {
    return(
        <>

        <Button margin="10px 0px">Hello Button</Button>
        <br />
        <Button margin="10px 0px" primary>primary</Button>
        <br />
        <Button margin="10px 0px" secondary>secondary</Button>
        <br />
        <Button margin="10px 0px" inverted>inverted</Button>
        <br />
        <ButtonLink margin="10px 0px" url="#">Button with link</ButtonLink>        
        <br />
        <ButtonLink inverted margin="10px 0px" url="#">Button with link inverted</ButtonLink>        

        </>
    )
};