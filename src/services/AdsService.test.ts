import { describe, expect, it } from 'vitest';

import { createAd, getAdById, getAds } from '@services/AdsService';
import type { Ad } from '@models/Ad';

function makeAd(overrides: Partial<Ad> = {}): Ad {
  return {
    id: '1',
    category: 'Camiseta manga curta',
    description: 'Camiseta azul em bom estado.',
    imagesUrl: ['image-1.jpg'],
    conservation: 'Bom',
    size: 'M',
    location: 'Maringá, PR',
    ...overrides,
  };
}

describe('getAds', () => {
  it('returns an empty array when storage is empty', () => {
    expect(getAds()).toEqual([]);
  });

  it('returns the ads stored in localStorage', () => {
    const ads = [makeAd(), makeAd({ id: '2' })];
    localStorage.setItem('ads', JSON.stringify(ads));

    expect(getAds()).toEqual(ads);
  });
});

describe('getAdById', () => {
  it('returns the ad matching the given id', () => {
    const target = makeAd({ id: '2', category: 'Vestido' });
    localStorage.setItem('ads', JSON.stringify([makeAd(), target]));

    expect(getAdById('2')).toEqual(target);
  });

  it('returns undefined when no ad matches', () => {
    localStorage.setItem('ads', JSON.stringify([makeAd()]));

    expect(getAdById('999')).toBeUndefined();
  });

  it('returns undefined when storage is empty', () => {
    expect(getAdById('1')).toBeUndefined();
  });
});

describe('createAd', () => {
  it('persists the ad to localStorage', () => {
    const ad = makeAd();

    createAd(ad);

    expect(JSON.parse(localStorage.getItem('ads')!)).toEqual([ad]);
  });

  it('appends to existing ads without overwriting them', () => {
    const first = makeAd();
    const second = makeAd({ id: '2', size: 'G' });

    createAd(first);
    createAd(second);

    expect(getAds()).toEqual([first, second]);
  });
});
