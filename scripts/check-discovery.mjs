import assert from 'node:assert/strict';
import problems from '../problem-content.json' with { type: 'json' };
import { enquiryGroups } from '../questions.js';
import { enquiryScore, enquiryTerms } from '../enquiry-search.js';
const answers = enquiryGroups.find(group => group.id === 'life-answers');
const rank = query => problems.categories.map((category, index) => ({
  id: category.id,
  score: enquiryScore(query, category.title, `${category.concerns} ${answers.entries[index][1]} ${category.example || ''}`, category.aliases)
})).sort((a,b) => b.score - a.score);
let count = 0;
for (const [index, category] of problems.categories.entries()) {
  for (const concern of category.concerns.split(' · ')) {
    assert.ok(enquiryScore(concern, category.title, category.concerns + answers.entries[index][1], category.aliases) > 0, `${concern}: its answer is discoverable`);
    count++;
  }
}
for (const [query, expected] of [
  ['lonely','loss'], ['angry','emotions'], ['anger','emotions'],
  ['jealous','possessions'], ['jealousy','possessions'],
  ['I cannot stop thinking','thoughts'], ['grieving','loss'], ['depressed','health']
]) assert.equal(rank(query)[0].id, expected, `${query}: the relevant concern ranks first`);
assert.deepEqual(enquiryTerms('I cannot stop thinking'), ['overthinking']);
assert.equal(enquiryScore('lonely','Proof','A calm feeling alone does not prove the philosophy'), 0, 'alone in a different context does not mean loneliness');
assert.ok(rank('zzzzzz').every(result => result.score === 0), 'an unknown query has no false match');
assert.ok(rank('').every(result => result.score > 0), 'clearing the query restores every concern');
console.log(`PASS: ${count} concerns, everyday synonyms, phrase matching, ranking, unknown queries and reset.`);
