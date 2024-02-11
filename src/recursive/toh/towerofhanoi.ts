function towerOfHanoi(nums: number, source: string, aux: string, des: string) {
  if (nums > 0) {
    towerOfHanoi(nums - 1, source, des, aux);
    console.log(`Move ${nums} Disk from ${source} to ${des} via ${aux}`);
    towerOfHanoi(nums - 1, aux, source, des);
  }
}

towerOfHanoi(3 , 'A', 'B', 'C')
