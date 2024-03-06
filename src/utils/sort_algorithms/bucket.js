export default function bucketSort(array, type='bubbles', actions) {
  let arr = Array.from(array);

  const bucketsCnt = Math.ceil(arr.length / 10);
  const maxElement = Math.max(...arr);
  let buckets = {};

  for (let i = 1; i <= bucketsCnt; i++) {
    Object.defineProperty(buckets, `bucket_${i}`, {
      value: {
        bucketArr: [],
        maxLength: i !== bucketsCnt ? 10 : arr.length - (10 * (i - 1)),
        from: i === 1 ? 0 : Math.floor((i - 1) * maxElement / bucketsCnt),
        to: i === bucketsCnt ? maxElement + 1 : Math.floor(i * maxElement / bucketsCnt),
      },
      writable: true,
      enumerable: true,
      configurable: true,
    });
  }

  for (let i = 0; i < arr.length; i++) {
    actions.push({ id: 'setActive', elems: [i] });

    for (let b = 1; b <= bucketsCnt; b++) {
      const from = buckets[`bucket_${b}`].from;
      const to = buckets[`bucket_${b}`].to;

      if (from <= arr[i] && arr[i] < to) {
        buckets[`bucket_${b}`].bucketArr.push(arr[i]);
      }
    }
  }

  let bucketsArray = [];

  for (let i = 1; i <= bucketsCnt; i++) {
    bucketsArray = [...bucketsArray, ...buckets[`bucket_${i}`].bucketArr];
  }

  bucketsArray.forEach((item, index) => {
    actions.push({ id: 'setActive', elems: [index] });
    actions.push({id: 'setElem', elems: [index, item]});
  });

  let index = 0;
  Object.keys(buckets).forEach(bucket => {
    let bucketArr = buckets[bucket].bucketArr;

    for (let i = 0; i < bucketArr.length; i++) {
      for (let j = 0; j < bucketArr.length - i - 1; j++) {
        actions.push({id: 'setActive', elems: [index + j, index + j + 1]});
        if (bucketArr[j] > bucketArr[j + 1]) {
          actions.push({ id: 'swap', elems: [index + j, index + j + 1]});
          [bucketArr[j], bucketArr[j + 1]] = [bucketArr[j + 1], bucketArr[j]];
        }
      }
      actions.push({ id: 'setSorted', elems: [bucketArr.length - i - 1 + index] });
    }
    index = index + bucketArr.length;
  });
}
