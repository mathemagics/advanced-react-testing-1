import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments_reducer';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.eql([]);
  });
  it('handles SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload:'message' }
    expect(commentReducer([], action)).to.eql(['message']);
  });
})
