import {createReducer} from '@reduxjs/toolkit';
import {Offers} from '../../types/state';
import {FetchStatus} from '../../const';
import {
  changeRoomOffer,
  dropRoomOffersData,
  loadNearbyOffersFailed,
  loadNearbyOffersRequest,
  loadNearbyOffersSuccess,
  loadOfferFailed,
  loadOfferRequest,
  loadOffersFailed,
  loadOffersRequest,
  loadOffersSuccess,
  loadOfferSuccess, replaceOffer
} from '../action';

const initialState: Offers = {
  offers: [],
  offersStatus: FetchStatus.Idle,
  offer: null,
  offerStatus: FetchStatus.Idle,
  nearbyOffers: [],
  nearbyOffersStatus: FetchStatus.Idle,
};

const offers = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffersRequest, (state) => {
      state.offersStatus = FetchStatus.Loading;
    })
    .addCase(loadOffersSuccess, (state, action) => {
      state.offersStatus = FetchStatus.Success;
      state.offers = action.payload;
    })
    .addCase(loadOffersFailed, (state) => {
      state.offersStatus = FetchStatus.Failed;
    })
    .addCase(loadOfferRequest, (state) => {
      state.offerStatus = FetchStatus.Loading;
    })
    .addCase(loadOfferSuccess, (state, action) => {
      state.offerStatus = FetchStatus.Success;
      state.offer = action.payload;
    })
    .addCase(loadOfferFailed, (state) => {
      state.offerStatus = FetchStatus.Failed;
    })
    .addCase(loadNearbyOffersRequest, (state) => {
      state.nearbyOffersStatus = FetchStatus.Loading;
    })
    .addCase(loadNearbyOffersSuccess, (state, action) => {
      state.nearbyOffersStatus = FetchStatus.Success;
      state.nearbyOffers = action.payload;
    })
    .addCase(loadNearbyOffersFailed, (state) => {
      state.nearbyOffersStatus = FetchStatus.Failed;
    })
    .addCase(dropRoomOffersData, (state) => {
      state.offer = null;
      state.offerStatus = FetchStatus.Idle;
      state.nearbyOffers = [];
      state.nearbyOffersStatus = FetchStatus.Idle;
    })
    .addCase(changeRoomOffer, (state, action) => {
      if (state.offer) {
        state.offer = action.payload;
      }
    })
    .addCase(replaceOffer, (state, action) => {
      const index = state.offers.findIndex((offer) => offer.id === action.payload.id);
      if (index >= 0) {
        state.offers = [
          ...state.offers.slice(0, index),
          action.payload,
          ...state.offers.slice(index + 1),
        ];
      }
    });

});

export {offers};
