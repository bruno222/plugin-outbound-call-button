import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';
import { OutboundButton } from './components/OutboundButton';

const PLUGIN_NAME = 'OutboundButtonPlugin';

export default class OutboundButtonPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  async init(flex: typeof Flex, manager: Flex.Manager): Promise<void> {
    flex.TaskCanvasHeader.Content.add(<OutboundButton key="outbound-call-button" />, {
      sortOrder: 1,
      if: (props) =>
        props.channelDefinition.capabilities.has('Chat') &&
        props.task.taskStatus === 'assigned' &&
        (props.task.attributes.callbackNumber || props.task.attributes.from),
    });
  }
}
