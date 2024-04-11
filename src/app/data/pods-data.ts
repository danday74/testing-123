import { IBasicPod, IGraphPod, IPod } from '../interfaces/i-pod'

export const podsData: (IBasicPod | IGraphPod | IPod)[] = [
  {
    id: 'pod-1',
    top: -300,
    left: -300,
    zIndex: 100,
    active: true,
    type: 'basic-pod',
    label: 'My Best Pod',
    stat1: 50,
    stat2: 22,
    text: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo ut nisi vitae ultrices. Nulla lectus quam, hendrerit et urna non, volutpat tincidunt dui. Ut est justo, auctor vitae cursus in, fermentum quis eros. Nulla lacinia nisl nisi, non efficitur elit rhoncus et. Cras dignissim erat eget turpis bibendum tincidunt. Integer ac facilisis tellus. Nullam vel feugiat magna. Sed eu tellus ultricies, consectetur lorem nec, tincidunt nisi. Nunc vitae pharetra justo. In non nunc tellus. Fusce eleifend malesuada enim, quis interdum ante convallis vel.
      Ut laoreet nisi purus, a vulputate mi convallis id. Cras in hendrerit ipsum. Nunc ullamcorper nunc a felis consectetur, eu congue lorem sagittis. In urna purus, vestibulum sed nibh at, semper pretium sem. Donec sollicitudin laoreet aliquet. Pellentesque ac libero et arcu mollis bibendum. Morbi ut hendrerit nunc, vel vehicula turpis.
    `
  },
  {
    id: 'pod-2',
    top: 0,
    left: 0,
    zIndex: 101,
    active: false,
    type: 'basic-pod',
    label: 'Another Pod',
    stat1: 33,
    stat2: 74,
    text: `
      Donec est tortor, ornare a mi eu, feugiat porttitor tellus. Praesent ultricies quis lorem ac feugiat. Pellentesque eleifend tincidunt mauris, ac porttitor nunc efficitur ac. Nunc hendrerit nunc libero, eget ultricies nibh rhoncus nec. Proin maximus ullamcorper malesuada. Donec erat mauris, sodales quis lacus id, elementum mollis nibh. Maecenas ut pulvinar massa. Donec ex mauris, pulvinar ut mattis molestie, facilisis quis magna. Vestibulum nibh tortor, posuere eu volutpat non, varius quis lacus. Duis arcu mauris, malesuada ut turpis et, condimentum ultrices dui. Donec eu maximus quam.
      Aenean auctor, velit et ornare rutrum, nibh quam semper lectus, in lobortis turpis magna vitae massa. Donec dictum interdum tincidunt. Aenean vulputate mattis augue. Mauris erat elit, porta eu neque vel, viverra suscipit erat. Nunc mattis magna non arcu fermentum, posuere ultricies tellus maximus. Sed eget congue quam. Duis convallis quis tortor at molestie. Aenean dapibus, justo nec tincidunt malesuada, lectus dui rhoncus odio, ut sollicitudin erat tortor at felis.
    `
  },
  {
    id: 'pod-3',
    top: 0,
    left: 0,
    zIndex: 102,
    active: false,
    type: 'basic-pod',
    label: 'Awesome Pod',
    stat1: 77,
    stat2: 88,
    text: `
      Pellentesque lobortis aliquet orci at iaculis. Vestibulum augue massa, tincidunt in dignissim in, placerat in nulla. Fusce mauris tellus, imperdiet vel consectetur sit amet, vulputate ac turpis. Nulla rhoncus mattis placerat. Morbi congue aliquam ex a tincidunt. Sed id maximus ex. Phasellus vitae est nec diam sollicitudin porta. Morbi a est lacinia, interdum purus in, luctus odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse luctus diam vel felis efficitur ultricies. Suspendisse dignissim, lectus sed convallis venenatis, elit lectus viverra neque, sit amet elementum mauris nisi sed risus.
    `
  },
  {
    id: 'pod-4',
    top: 200,
    left: 300,
    zIndex: 103,
    active: true,
    type: 'graph-pod',
    label: 'A graph'
  }
]
