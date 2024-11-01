import ERROR_MESSAGE from '../../constants/ErrorMessage.js';

function validateLottoNumberLength(numbers) {
  if (numbers.length !== 6) {
    throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_LENGTH);
  }
}

function validateLottoNumbersUnique(numbers) {
  const lottoNumberSet = new Set(numbers);
  if (lottoNumberSet.size !== 6) {
    throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER);
  }
}

function validateLottoNumberRange(numbers) {
  const isInvalid = numbers.some((number) => number < 1 || number > 45);
  if (isInvalid) {
    throw new Error(ERROR_MESSAGE.INVALID_LOTTO_NUMBER_RANGE);
  }
}

function validateLottoNumbers(numbers) {
  const isInvalid = numbers.some(
    (number) => typeof number !== 'number' || Number.isNaN(number),
  );
  if (isInvalid) {
    throw new Error(ERROR_MESSAGE.INVALID_NOT_NUMBER);
  }
}

export default function validateLotto(numbers) {
  if (!numbers) {
    throw new Error(ERROR_MESSAGE.INVALID_NOT_NUMBER);
  }
  validateLottoNumberLength(numbers);
  validateLottoNumbers(numbers);
  validateLottoNumberRange(numbers);
  validateLottoNumbersUnique(numbers);
}
