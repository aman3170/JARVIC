const chatbot = new LexWebUi({
  botName: 'DailyTaskChatbot',
  LexingtonRuntime: '2018-11-15',
  AWSRegion: 'us-east-1',
  identityPoolId: 'YOUR_IDENTITY_POOL_ID',
  ui: {
    container: document.getElementById('chatbot'),
    inputBox: 'text',
    conversationPanel: 'text'
  }
});

chatbot.interactive('start');
