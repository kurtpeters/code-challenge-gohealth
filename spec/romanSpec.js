describe("Number.toRoman()", function() {

	it("should translate simple numerals", function() {
		expect((1).toRoman()).toEqual('I');
		expect((5).toRoman()).toEqual('V');
		expect((10).toRoman()).toEqual('X');
		expect((50).toRoman()).toEqual('L');
		expect((100).toRoman()).toEqual('C');
		expect((500).toRoman()).toEqual('D');
		expect((1000).toRoman()).toEqual('M');
		expect((74).toRoman()).toEqual('LXXIV'); // wildcard
	});

	it("should ignore the mantissa, if present", function() {
		expect((10.0).toRoman()).toEqual('X');
		expect((10.4).toRoman()).toEqual('X');
		expect((10.999).toRoman()).toEqual('X');
	});

	/* Write additional tests here. */
	it('should return empty string for unexpected context', function() {
		expect((0).toRoman()).toEqual('');
		expect((4000).toRoman()).toEqual('');
		expect((3999).toRoman()).not.toEqual('');
	});

	it('should return empty string if Number instance is not assigned', function() {
		expect(Number.prototype.toRoman.apply({})).toEqual('');
		expect(Number.prototype.toRoman.apply([])).toEqual('');
		expect(Number.prototype.toRoman.apply('1')).toEqual('');
		expect(Number.prototype.toRoman.apply(1)).not.toEqual('');
	});
});