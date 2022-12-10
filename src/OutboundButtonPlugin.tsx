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
      if: (props: any) =>
        !props.channelDefinition.capabilities.has('Call') &&
        ['wrapping', 'assigned'].includes(props.task.taskStatus) &&
        (props.task.attributes.callbackNumber || props.task.attributes.from),
    });
  }
}
