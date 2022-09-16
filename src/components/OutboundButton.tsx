import React from 'react';
import styled from 'styled-components';
import { Actions } from '@twilio/flex-ui';

import { CallOutgoingIcon } from '@twilio-paste/icons/esm/CallOutgoingIcon';

const IconWrapper = styled.div`
  margin: 0.8rem;
  margin-left: 0;
  margin-right: 1.5rem;
  max-width: 3rem;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;

export const OutboundButton = ({ task }: any) => {
  const { attributes } = task;
  const outboundCallAttributes = {
    destination: attributes.callbackNumber || attributes.from,
    taskAttributes: { type: 'outbound', channelType: 'voice' },
  };

  return (
    <IconWrapper
      onClick={() => {
        console.log('@@ starting outbound call. Attributes: ', outboundCallAttributes);
        Actions.invokeAction('StartOutboundCall', outboundCallAttributes);
      }}
    >
      <CallOutgoingIcon decorative={false} title="" size="sizeIcon40" />
    </IconWrapper>
  );
};
