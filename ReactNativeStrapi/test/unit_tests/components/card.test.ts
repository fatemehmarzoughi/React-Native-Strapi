const Card = require('../../../src/components/card.tsx')

test('description', () => {
    console.log(wrapper.state)
    Card.openModal();
    expect(Card.state.openModal).toBe(true);
})