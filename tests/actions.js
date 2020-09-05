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

    it('checkbox and radio buttons', () => {
        const radio = $('#linux')
        const check = $('#remote-testing');
        radio.waitForExist()
        browser.pause(short)
        radio.click()

        check.waitForExist()
        check.click()
        browser.pause(short)

    })

    it('select box', () => {
        browser.url('https://devexpress.github.io/testcafe/example')
        const select = $('#preferred-interface')
        select.waitForExist()
        select.selectByVisibleText('JavaScript API')
        browser.pause(short)
    })
})