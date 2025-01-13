const chatbot = new LexWebUi({
  botName: 'DailyTaskChatbot',
  LexingtonRuntime: '2018-11-15',
  AWSRegion: 'us-east-1',
  identityPoolId: 'us-east-1:176ea5af-94b9-4f0a-a5c7-9bf54e9b717d',
  ui: {
    container: document.getElementById('chatbot'),
    inputBox: 'text',
    conversationPanel: 'text'
  }
});

chatbot.interactive('start');
