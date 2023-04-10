import { getSearchData, SearchBarSlice } from './SearchBarSlice';
import { getFetchCards, getSearchFetchCards, CardsHomePageSlice } from './CardsHomePageSlice';
import * as actions from './CardsHomePageSlice';
import {
  ContactFormSlice,
  createContactFormCard,
  resetForm,
  ContactFormState,
} from './ContactFormSlice';

describe('SearchBarSlice', () => {
  it('should update the search value', () => {
    const initialState = { value: '' };
    const action = getSearchData('test');
    const newState = SearchBarSlice.reducer(initialState, action);
    expect(newState.value).toEqual('test');
  });
});

describe('CardsHomePageSlice', () => {
  describe('getFetchCards', () => {
    it('should fetch cards successfully', async () => {
      const dispatchMock = jest.fn();
      const getStateMock = jest.fn();
      const mockedGetFetchCards = jest.spyOn(actions, 'getFetchCards');
      await getFetchCards()(dispatchMock, getStateMock, undefined);
      expect(mockedGetFetchCards).toHaveBeenCalledTimes(1);
    });

    describe('getSearchFetchCards', () => {
      it('should fetch search cards successfully', async () => {
        const dispatchMock = jest.fn();
        const getStateMock = jest.fn();
        const response = [{ id: '1', title: 'Test Card' }];
        global.fetch = jest.fn(() =>
          Promise.resolve({
            ok: true,
            json: () => ({ results: response }),
            headers: new Headers(),
            redirected: false,
            status: 200,
            statusText: 'OK',
            type: 'default',
            url: 'https://example.com',
          } as unknown as Response)
        );
        const mockedGetFetchCards = jest.spyOn(actions, 'getSearchFetchCards');
        await getSearchFetchCards('test')(dispatchMock, getStateMock, undefined);

        expect(mockedGetFetchCards).toHaveBeenCalledTimes(1);
      });
    });
  });
});

describe('ContactFormSlice', () => {
  it('should add a card and set isSubmit to true', () => {
    const initialState: ContactFormState = {
      cards: [],
      isSubmit: false,
      error: null,
    };
    const action = createContactFormCard({ cards: { id: '1', name: 'John Doe' } });
    const nextState = ContactFormSlice.reducer(initialState, action);
    expect(nextState.cards).toEqual([{ id: '1', name: 'John Doe' }]);
    expect(nextState.isSubmit).toBe(true);
  });

  it('should set isSubmit to false', () => {
    const initialState: ContactFormState = {
      cards: [],
      isSubmit: true,
      error: null,
    };
    const action = resetForm();
    const nextState = ContactFormSlice.reducer(initialState, action);
    expect(nextState.isSubmit).toBe(false);
  });

  it('should return the current state for an unknown action', () => {
    const initialState: ContactFormState = {
      cards: [],
      isSubmit: false,
      error: null,
    };
    const action = { type: 'unknown' };
    const nextState = ContactFormSlice.reducer(initialState, action);
    expect(nextState).toEqual(initialState);
  });
});
