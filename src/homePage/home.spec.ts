import { init } from '../../common/core'

jest.setTimeout(40 * 1000)

describe('Home Page test', () => {
  beforeEach(async () => await init());
  afterAll(async () => await page.close());

  it('First', async () => {

  })

  it('Second', async () => {

  })
})
