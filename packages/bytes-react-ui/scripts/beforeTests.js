const { execSync } = require('child_process')
const { join } = require('path')
const findChrome = require('carlo/lib/find_chrome')
const detectInstaller = require('detect-installer')

const installPuppeteer = () => {
  // find can use package manager
  const packages = detectInstaller(join(__dirname, '../'))
  const packageName = packages.find(detectInstaller.hasPackageCommand) || 'npm'
  console.log(`use ${packageName} to install puppeteer`)
  const command = `${packageName} ${
    packageName.includes('yarn') ? 'add' : 'install'
  } puppeteer`
  execSync(command, {
    stdio: 'inherit',
  })
}

const initPuppeteer = async () => {
  try {
    const findChromePath = await findChrome({})
    const { executablePath } = findChromePath
    console.log(`found your browser in ${executablePath}`)
    return
  } catch (error) {
    console.log('chrome not found! TLT')
  }

  try {
    require.resolve('puppeteer')
  } catch (error) {
    await installPuppeteer()
  }
}

initPuppeteer()
