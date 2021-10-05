this.openTestDatabase(function (db) {

    assert.exception(
        db.approximateSize.bind(db)
      , { name: 'ReadError', message: 'approximateSize() requires start, end and callback arguments' }
      , 'no-arg approximateSize() throws'
    )

    assert.exception(
        db.approximateSize.bind(db, 'foo')
      , { name: 'ReadError', message: 'approximateSize() requires start, end and callback arguments' }
      , 'callback-less, 1-arg approximateSize() throws'
    )

    assert.exception(
        db.approximateSize.bind(db, 'foo', 'bar')
      , { name: 'ReadError', message: 'approximateSize() requires start, end and callback arguments' }
      , 'callback-less, 2-arg approximateSize() throws'
    )

    assert.exception(
        db.approximateSize.bind(db, 'foo', 'bar', {})
      , { name: 'ReadError', message: 'approximateSize() requires start, end and callback arguments' }
      , 'callback-less, 3-arg approximateSize(), no cb throws'
    )

    done()
  })

  it("throws if given argument is not a string", function () {
    assert.exception(function () {
        sinonMatch.typeOf();
    }, "TypeError");
    assert.exception(function () {
        sinonMatch.typeOf(123);
    }, "TypeError");
});

it("throws if given argument is not a function", function () {
    assert.exception(function () {
        sinonMatch.instanceOf();
    }, "TypeError");
    assert.exception(function () {
        sinonMatch.instanceOf("foo");
    }, "TypeError");
});