import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the <b>city name</b> in <b>6</b> tries. After each guess, the color of the tiles will
        change to show how close your guess was to the city name.
        Each day of the week city name legth is different - the <b>shortest </b>
        on <b>Sunday</b> and the <b>longest</b> on <b>Saturday</b>.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="correct"
        />
        <Cell value="U" />
        <Cell value="H" />
        <Cell value="A" />
        <Cell value="N" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is in the city name and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="D" />
        <Cell value="E" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="H" />
        <Cell value="I" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter L is in the city name but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="O" />
        <Cell value="S" />
        <Cell value="A" />
        <Cell isRevealing={true} isCompleted={true} value="K" status="absent" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter K is not in the city name in any spot.
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Turn on <b>Show country name</b> in the settings to make it easier for you. Enjoy!
        </p>
      </div>
    </BaseModal>
  )
}
