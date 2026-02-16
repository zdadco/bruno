import { test } from '../../../playwright';
import * as path from 'path';
import { closeAllCollections, importCollection } from '../../utils/page';

test.describe('Import Multi-Language tags OpenAPI v3 JSON Collection', () => {
  test.afterEach(async ({ page }) => {
    await closeAllCollections(page);
  });

  test('Import Multi-Language tags OpenAPI v3 JSON successfully', async ({ page, createTmpDir }) => {
    const openApiFile = path.resolve(__dirname, 'fixtures', 'openapi-with-tags.json');

    await importCollection(page, openApiFile, await createTmpDir('simple-test'), {
      expectedCollectionName: 'Multi-language tags API'
    });
  });
});
