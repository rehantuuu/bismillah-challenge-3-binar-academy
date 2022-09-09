function sortCarByYearAscendingly(cars) {
    console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
    var result = [...cars];

  // Tulis code-mu disini

    //Algoritma Sorting Bubble Sort untuk Ascending
    const bubbleSort = (arr) => {
        let status = false;
        do {
            status = true;

            for (let i = 1; i < arr.length; i++) {
                if (arr[i - 1].year > arr[i].year) {
                    [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
                    status = false;
                }
            }
        } while (!status);
    };
    //Merge Sort
    const merge = (arr, kiri, mid, kanan) => {

        var n1 = mid - kiri + 1;
        var n2 = kanan - mid;

        var L = new Array(n1);
        var R = new Array(n2);


        for (var i = 0; i < n1; i++) {
            L[i] = arr[kiri + i];
        }

        for (var j = 0; j < n2; j++) {
            R[j] = arr[mid + 1 + j];
        }

        var pertama = 0;
        var kedua = 0;
        var merged = kiri;

        while (pertama < n1 && kedua < n2) {
            if (L[pertama].year <= R[kedua].year) {
                arr[merged] = L[pertama];
                pertama++;
            } else {
                arr[merged] = R[kedua];
                kedua++;
            }
            merged++;
        }

        while (pertama < n1) {
            arr[merged] = L[pertama];
            pertama++;
            merged++;
        }

        while (kedua < n2) {
            arr[merged] = R[kedua];
            kedua++;
            merged++;
        }
    };

    const mergeSort = (arr, kiri, kanan) => {
        if (kiri >= kanan) return;

        var mid = parseInt(kiri + (kanan - kiri) / 2);

        mergeSort(arr, kiri, mid);

        mergeSort(arr, mid + 1, kanan);

        merge(arr, kiri, mid, kanan);
    };

    console.table(result);

    var kanan = result.length - 1;
    mergeSort(result, 0, kanan);

    console.table(result);

  // Rubah code ini dengan array hasil sorting secara ascending
    return result;
}
