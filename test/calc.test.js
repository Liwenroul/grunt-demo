const add =require('../calc.js');
const expect=require('chai').expect;

describe('加法函数的单元测试',function(){
    it('3+5=8',function(){
        expect(add(3,5)).to.be.equal(8);
    });

    it('1+0=1',function(){
        expect(add(1,0)).to.be.equal(1);
    });

    it('a+b=NaN',function(){
        expect(isNaN(add('a','b'))).to.be.ok;
    });    
});