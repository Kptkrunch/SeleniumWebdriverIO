import {  short, medium, long  } from '../lib/timeouts';

describe('Browser Actions', () => {
    it('Inputs', () => {
        browser.url('http://devexpress.github.io/testcafe/example/')
        const input = $('#developer-name')
        input.waitForExist()
        input.setValue('Mike')
        browser.pause(short)
        input.clearValue()
        browser.pause(short)
        input.addValue('mike')
        browser.pause(short)
    })

    it('Click', () => {
        const buttonPopulate = $('#populate')
        buttonPopulate.waitForExist()
        buttonPopulate.click()
        buttonPopulate.doubleClick()
    })
})