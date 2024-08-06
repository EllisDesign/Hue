/*

  Dev  : pm2 start pm2.config.js --only hue_dev
  Prod : pm2 start pm2.config.js --only hue

*/

module.exports = {
	apps: [
		{
			name: 'hue_dev',
			script: 'npm',
			args: 'run prod',
			env: { NODE_ENV: 'production' }
		},
		{
			name: 'hue',
			script: 'npm',
			args: 'run prod',
			env: { NODE_ENV: 'production' }
		}
	]
}
