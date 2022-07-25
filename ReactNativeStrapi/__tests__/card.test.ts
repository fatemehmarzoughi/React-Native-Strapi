const Card = require('../src/components/card.tsx')

test('description', () => {
    Card.openModal();
    expect(Card.state.openModal).toBe(true);
})