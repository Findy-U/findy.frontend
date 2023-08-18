import {
  DetailedHTMLProps,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
  ChangeEvent
} from "react";
import { SVGIcon } from "../../types/SVGIcon";
import { Text } from "../Text";
import { SelectArrowUpIcon } from "../icons/SelectArrowUpIcon";
import { SelectArrowDownIcon } from "../icons/SelectArrowDownIcon";

export type ValueLabel = {
  value: string;
  label: string;
};

interface InputDBv2Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  options: ValueLabel[] | string[];
  name?: string;
  label?: string;
  requiredField?: boolean;
  type?: string;
  placeholder?: string;
  icon?: SVGIcon;
  error?: string;
  fieldSetClassName?: string;
  fieldSetBG?: string;
  wantInputWidthFull?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputDBv2Props> = (
  {
    options,
    name = "",
    label,
    requiredField = false,
    placeholder,
    icon = undefined,
    type = "text",
    error = null,
    fieldSetClassName = "",
    fieldSetBG = "",
    wantInputWidthFull = false,
    className = "",
    onChange,
    onBlur,
    ...rest
  },
  ref
) => {
  const [openList, setOpenList] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputLabelRef = useRef<HTMLInputElement>(null);
  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    ref,
    () => inputRef.current
  );

  function updateInputLabelValue() {
    if (inputRef.current && inputLabelRef.current && inputRef.current?.value !== "") {

      const labelFounded = options.map((option: ValueLabel | string) => {
        if (typeof option !== "string") {
          return option
        }
      }).filter(option => option?.value == inputRef.current?.value)[0]?.label as string

      inputLabelRef.current.value = typeof options[0] === "string" ?
        inputRef.current.value : labelFounded;
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenList);

    updateInputLabelValue();

  }, [])

  const closeOpenList = (e: any) => {
    if (!listRef.current || !inputLabelRef.current)
      return

    if (!listRef.current.contains(e.target) &&
      !inputLabelRef.current.contains(e.target) &&
      !inputLabelRef.current.parentElement?.contains(e.target)
    ) {
      setOpenList(false);
    }
  }

  function toggleList() {
    setOpenList(prevState => !prevState);
  }

  function setInputValue(newValue: string | ValueLabel) {
    if (inputRef.current?.value != undefined &&
      inputLabelRef.current?.value != undefined) {

      inputRef.current.value = (typeof newValue == 'string') ? newValue : newValue.value;
      inputLabelRef.current.value = (typeof newValue == 'string') ? newValue : newValue.label;

      onChange &&
        onChange(
          {
            target: inputRef.current,
          } as ChangeEvent<HTMLInputElement>);

      setOpenList(false);
    }

  }

  return (
    <fieldset
      className={`h-[7.6rem] flex flex-col ${fieldSetClassName}`}
      onClick={() => {
        if (inputRef.current) inputRef.current.focus();
      }}
    >
      {!!label && (
        <label
          htmlFor={name}
          className="mb-[0.3rem] text-[1.6rem] font-medium leading-[2.08rem] tracking-[-0.5%] text-black text-opacity-80"
        >
          {`${label}${requiredField ? "*" : ""}`}
        </label>
      )}

      <div
        className={`flex h-[3.6rem] w-[50.5rem] py-[0.8rem] px-[1.6rem] border-grey-#2 ${openList ? "rounded-t-[0.8rem] border-x border-t bg-green-light" : "rounded-[0.8rem] border bg-grey-#4"}  ${fieldSetBG} ${wantInputWidthFull ? "w-full" : ""}`}
        onClick={() => toggleList()}
      >
        {icon && (
          <div
            className="flex w-[5.3rem] items-center justify-center rounded-bl-[0.3rem] rounded-tl-[0.3rem] bg-blue-dark-#1
          mbl:max-w-[70%] "
          >
            <>{icon}</>
          </div>
        )}

        <input
          ref={inputLabelRef}
          type={type}
          placeholder={placeholder}
          readOnly
          className={`w-full border-none text-[1.4rem] font-medium leading-[1.82rem] outline-none disabled:bg-grey-#3 ${openList ? "bg-green-light text-blue-dark-#1 placeholder:text-blue-dark-#1" : "bg-grey-#4 text-green-medium placeholder:text-grey-#2"}  ${className} ${fieldSetBG} ${wantInputWidthFull ? "w-[96%]" : ""}`}
          {...rest}
        />

        <input
          name={name}
          ref={inputRef}
          className="w-0 opacity-0"
          onChange={onChange}
          onBlur={onBlur}
        />

        {openList ? <SelectArrowDownIcon /> : <SelectArrowUpIcon />}

      </div>

      {options && openList &&
        <div
          className="bg-white overflow-clip z-10 border-x border-b border-t-2 border-grey-#2 rounded-b-[0.8rem] "
        >
          <ul
            className="overflow-y-auto max-h-[14.4rem] text-grey-#2 text-[1.4rem] leading-[1.82rem] font-medium"
            ref={listRef}
          >
            {options
              .map((newOption: string | ValueLabel, index: number) => {
                return typeof newOption === "string" ? (
                  <li
                    data-selected={newOption == inputLabelRef.current?.value}
                    className={`py-[0.85rem] px-4 data-[selected=true]:bg-green-medium data-[selected=true]:text-green-light hover:data-[selected=true]:bg-green-light hover:data-[selected]:text-green-medium  hover:bg-green-light hover:text-green-medium hover:border-l-green-dark hover:border-l-[0.3rem]`}
                    key={`${name}${newOption ? newOption : Date.now() + index
                      }`}
                    value={newOption}
                    onClick={() => setInputValue(newOption)}
                  >
                    {newOption}
                  </li>
                ) : (
                  <li
                    data-selected={newOption.label == inputLabelRef.current?.value}
                    className={`py-[0.85rem] px-4 data-[selected=true]:bg-green-medium data-[selected=true]:text-green-light hover:data-[selected=true]:bg-green-light hover:data-[selected]:text-green-medium  hover:bg-green-light hover:text-green-medium hover:border-l-green-dark hover:border-l-[0.3rem]`}

                    key={`${name}${newOption.value ? newOption.value : Date.now() + index
                      }`}
                    value={newOption.value}
                    onClick={() => setInputValue(newOption.value)}
                  >
                    {newOption.label}
                  </li>
                );
              })}
          </ul>
        </div>
      }

      {!!error && !openList && (
        <Text
          type="sm"
          className="text-red"
        >
          {`${error}`}
        </Text>
      )}
    </fieldset>
  );
};

export const SelectDBv2 = forwardRef(InputBase);