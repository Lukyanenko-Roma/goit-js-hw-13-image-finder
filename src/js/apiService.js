export default class ApiService {
  constructor() {
    this.key = '21037047-c22a445b7b65c1f46543ac296';
    this.page = 1;
    this.searchQuery = '';
  }
  async fetchImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.key}`;
    const response = await fetch(url);
    return response.json().then(({ hits }) => {
      this.incrementPage();
      return hits;
    });
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}