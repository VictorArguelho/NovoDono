import { describe, expect, it } from 'vitest';

import { CreateAds } from './PlaceholdersCreator';
import { getAds } from '@services/AdsService';

describe('CreateAds', () => {
  it('seeds localStorage with placeholder ads when storage is empty', () => {
    CreateAds();

    const ads = getAds();
    expect(ads).toHaveLength(11);
    expect(ads.map((ad) => ad.id)).toEqual(
      Array.from({ length: 11 }, (_, i) => String(i + 1)),
    );
  });

  it('creates ads with all required fields populated', () => {
    CreateAds();

    for (const ad of getAds()) {
      expect(ad.category).not.toBe('');
      expect(ad.description).not.toBe('');
      expect(ad.imagesUrl.length).toBeGreaterThan(0);
      expect(ad.conservation).not.toBe('');
      expect(ad.size).not.toBe('');
      expect(ad.location).not.toBe('');
    }
  });

  it('does not seed again when ads already exist', () => {
    localStorage.setItem('ads', JSON.stringify([{ id: 'existing' }]));

    CreateAds();

    const ads = getAds();
    expect(ads).toHaveLength(1);
    expect(ads[0].id).toBe('existing');
  });

  it('does not duplicate ads when called twice', () => {
    CreateAds();
    CreateAds();

    expect(getAds()).toHaveLength(11);
  });
});
