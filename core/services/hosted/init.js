
module.exports = function*(S){

  //console.log('\n>>>', 'Running Database init...');
  //console.log('>>> api', S);
  //console.log('>>> this', this);

  S.log('info', 'Running HOSTED service init...');
  S.log('debug', S);
  //S.log('debug', this);

  return '[[Hosted API]]';
};