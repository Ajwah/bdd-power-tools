import { expect } from 'chai';

import { StepStore } from './stepStore';

describe('StepStore', function() {

  it('should fill on creation', function() {
    const actual = new StepStore(__dirname + '/features/de/**/*.feature');
    return actual.fill().then(() => {
      expect(actual.Given.length).to.be.greaterThan(0);
      expect(actual.When.length).to.be.greaterThan(0);
      expect(actual.Then.length).to.be.greaterThan(0);
    });
  });

  it('should import all Given steps', function() {
    const actual = new StepStore(__dirname + '/features/de/**/*.feature');
    return actual.fill().then(() => {
      expect(actual.Given).to.include('eine Root Vorbedingung');
    });
  });

  it('should import all When steps', function() {
    const actual = new StepStore(__dirname + '/features/de/**/*.feature');
    return actual.fill().then(() => {
      expect(actual.When).to.include('eine Root Aktion');
    });
  });

  it('should import all Then steps', function() {
    const actual = new StepStore(__dirname + '/features/de/**/*.feature');
    return actual.fill().then(() => {
      expect(actual.Then).to.include('ein Root Ergebnis');
    });
  });

  xit('should add all And steps', function() {
    const actual = new StepStore(__dirname + '/features/de/**/*.feature');
    return actual.fill().then(() => function() {
      expect(actual.Given).to.include('noch eine Root Vorbedingung');
      expect(actual.Given).to.include('eine dritte Root Vorbedingung');
      // tslint:disable-next-line:no-console
      console.log(actual.Given);
    });
  });

});
