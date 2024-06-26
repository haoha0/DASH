import CommonProperty from '../../../../src/dash/parser/maps/CommonProperty.js';
import {expect} from 'chai';

describe('CommonProperty', function () {

    it('should return a CommonProperty with values as supplied', () => {
        const name = 'lowerCaseFirstCharacter';

        const commonProperty = new CommonProperty(name);

        expect(commonProperty).to.be.instanceof(CommonProperty); // jshint ignore:line
        expect(commonProperty.name).to.equal(name); // jshint ignore:line
    });

    it('should default merge property to false when not supplied and name is lowercase', () => {
        const name = 'lowerCaseFirstCharacter';

        const commonProperty = new CommonProperty(name);

        expect(commonProperty.merge).to.equal(false); // jshint ignore:line
    });

    it('should default merge property to true when not supplied and name is uppercase', () => {
        const name = 'UpperCaseFirstCharacter';

        const commonProperty = new CommonProperty(name);

        expect(commonProperty.merge).to.equal(true); // jshint ignore:line
    });

    it('should throw an exception if attempting to use setters', () => {
        const name = '';

        const commonProperty = new CommonProperty(name);

        ['name', 'merge'].forEach(p => {
            const f = () => commonProperty[p] = p;
            expect(f).to.throw(Error);
        });
    });
});
