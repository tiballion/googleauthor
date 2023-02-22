export interface GoogleAuthorAPI {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: {
    title: string
    authors: Array<string>
    publisher: string
    publishedDate: string
    description: string
    industryIdentifiers: Array<{
      type: string
      identifier: string
    }>
    readingModes: {
      text: boolean
      image: boolean
    }
    pageCount: number
    printType: string
    categories: Array<string>
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary: {
      containsEpubBubbles: boolean
      containsImageBubbles: boolean
    }
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
    }
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
  }
  saleInfo: {
    country: string
    saleability: string
    isEbook: boolean
  }
  accessInfo: {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: {
      isAvailable: boolean
    }
    pdf: {
      isAvailable: boolean
    }
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
  }
}

export interface Book {
  id: string
  volumeInfo: {
    title: string
    authors?: Array<string>
    description: string
    pageCount: number
    averageRating: number
    imageLinks: {
      thumbnail?: string
    }
    infoLink: string
    publishedDate: string
    language: string
  }
}
