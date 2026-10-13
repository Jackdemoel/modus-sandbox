import { AgenticNarrowChat } from '@trimble-agentic-external-npm-local/agentic-chat-react';

const AGENT_ID = '82eab240-73d9-4b60-ab2d-a782389438f7';

const chatInputConfiguration = {
  buttons: [],
  hideModelSelection: false,
};

const AssistPanel = ({ provideToken, isDarkMode }) => {
  return (
    <div className="assist-panel">
      <AgenticNarrowChat
        provideToken={provideToken}
        environment="prod"
        theme={isDarkMode ? 'dark' : 'light'}
        agentId={AGENT_ID}
        locale="nl-NL"
        chatInputConfiguration={chatInputConfiguration}
        productAgents={[AGENT_ID]}
        showCloseButton={false}
        showAgentDropdown={false}
        className="assist-panel-frame"
      />
    </div>
  );
};

export default AssistPanel;
