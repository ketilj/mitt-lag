var assert = require('chai').assert;
var expect = require('chai').expect;
var dateUtil = require('../server/DateUtil');
var moment = require('moment');

describe('Date utililty tests', function() {
  describe('#convert from one format to another', function () {
    it('should return a date format on pretty format', function () {
      var date = "4/26/2016";
      var prettyDate = dateUtil.format(date, "DD.MM.YYYY");
      expect(prettyDate).to.equal("26.04.2016");
    });
  });
  
  describe('#Various tests for date utilities', function() {
     it('check if a date is 2 days in the future', function() {
        var date = new Date();
        var month = date.getMonth() + 1;
        var todayPlussTwoDays = date.getDate() + 2;
        var dateString = month + "/" + todayPlussTwoDays + "/" + date.getFullYear();
        console.log(dateString);
        expect(dateUtil.isDateInTwoDays(dateString)).to.be.true;
     });
  });
});