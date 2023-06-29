import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { SurveyPersonalData } from '../../../types/SurveyPersonalData';
import { CandidateUser } from '../../../types/CandidateUser';

import { Button } from "../../../components/Button";
import { Heading } from "../../../components/Heading";
import { Text } from "../../../components/Text";
import { InputDBv2 } from "../../../components/forms/InputDBv2";
import { SelectDBv2 } from '../../../components/forms/SelectDBv2';
import { useSteps } from '../../../components/ProgressBar/context/useSteps';

import { useSurveyContext } from '../context/SurveyContext';
import { AuthContext, Token } from '../../../context/auth';
import { getCandidateUser } from '../../../services/api';

import { calculateYears } from "../../../utils/DateUtil";
import { formatDateISO } from "../../../utils/FormatUtil";
import { SurveyNav } from './SurveyNav';

const schema = yup
  .object()
  .shape(
    {
      name: yup.string()
        .required('Nome obrigatório')
        .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s ]*)$/gi, "Aceita apenas carateres alfabéticos e espaços"),
      genre: yup.string().required('Gênero obrigatório'),
      birth: yup.date()
        .required('Data de Nascimento obrigatório').typeError('Data de Nascimento obrigatório')
        .max(calculateYears(new Date(), -16), "Idade mínima permitida é de 16 anos"),
      residencePlace: yup.string().required('Local de residência obrigatório'),
    }
  )
  .required();


export function PersonalData() {
  const { surveyPersonalData, setSurveyPersonalData, updatedSurveyPersonalData } = useSurveyContext();
  const { nextStep } = useSteps();
  const [candidateUser, setCandidateUser] = useState<CandidateUser>({} as CandidateUser);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const { getToken } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<SurveyPersonalData>({
    resolver: yupResolver(schema),
    shouldFocusError: true,
    mode: 'onBlur',
    defaultValues: {
      name: surveyPersonalData ? surveyPersonalData.name : '',
      genre: surveyPersonalData ? surveyPersonalData.genre : '',
      birth: surveyPersonalData ? surveyPersonalData.birth : undefined,
      residencePlace: surveyPersonalData ? surveyPersonalData.residencePlace : '',
    },
  });


  const handleUpdateSurvey: SubmitHandler<SurveyPersonalData> = async (values, event) => {
    event?.preventDefault();

    // Simulando a espera da API
    await new Promise(resolve => setTimeout(resolve, 1000));

    //setSurveyPersonalData(values);

    updatedSurveyPersonalData(values);

    console.log("Survey[Form]: ", values);
    console.log("Survey[Context]: ", surveyPersonalData);

    nextStep();
  };


  useEffect(() => {

    /* async function getUserToken() {
      const token = getToken();

      if (!token) {
        return;
      }

      try {
        const { sub } = jwt_decode<Token>(token);

        await getCandidateUser(String(sub)).then((response) => {
          setCandidateUser(response.data);
        });
      } catch (error) {
        toast.error(getErrorMessage(error));
      }
    }
    getUserToken(); */

    setFocus("name");
    setIsLoadingInitial(false);
  }, []);

  useEffect(() => {
    if (!Object.keys(candidateUser).length) return;

    setValue('name', candidateUser?.name);

  }, [candidateUser]);


  return (
    <form
      className="mx-auto mt-[2rem] mb-[7.692rem] w-[66rem]"
      noValidate
      onSubmit={handleSubmit(handleUpdateSurvey)}
    >
      <Heading type="xxs" className="text-center text-grey-#4">
        Crie seu perfil.
      </Heading>

      <fieldset className="w-full flex flex-col gap-[2rem] mt-4 py-16 pl-[7.7rem] pr-[7.8rem] rounded-[2.233rem] bg-white">

        <InputDBv2
          label="Nome completo"
          requiredField
          placeholder="Digite seu nome"
          maxLength={70}
          error={errors.name?.message}
          {...register('name')}
        />

        <SelectDBv2
          options={['Masculino', 'Feminino', 'Outro', 'Prefiro não informar']}
          label="Gênero"
          requiredField
          placeholder="Selecione uma opção"
          error={errors.genre?.message}
          {...register('genre')}
        />

        <InputDBv2
          label="Nascimento"
          type="date"
          max={formatDateISO(calculateYears(new Date(), -16))}
          requiredField
          placeholder="Selecione uma data"
          error={errors.birth?.message}
          {...register('birth')}
        />

        <InputDBv2
          label="Local de residência"
          requiredField
          placeholder="Digite seu local de residência"
          error={errors.residencePlace?.message}
          {...register('residencePlace')}
        />

        <Text
          type="sm"
          className={`text-black opacity-80 font-normal ${errors.residencePlace?.message ? "mt-[-2.5rem]" : "mt-[-3.6rem]"} `}
        >
          *Campos obrigatórios
        </Text>
      </fieldset>

      <SurveyNav
        isSubmitting={isSubmitting}
        submitLabel="Continuar" 
      />
    </form>

  );
}