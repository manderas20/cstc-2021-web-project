import React from 'react';
import './ContactUs.css';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const Contact = () => {
	const { register, errors, handleSubmit, reset } = useForm();
	const toastifySuccess = () => {
		toast('Form sent!', {
			position: 'bottom-right',
			autoClose: 5000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			className: 'submit-feedback success',
			toastId: 'notifyToast',
		});
	};

	const onSubmit = async (data) => {
		console.log(data);
		console.log('name ', data.name);
		console.log('object', data.object);
		console.log('Email: ', data.email);
		console.log('Message: ', data.message);

		try {
			const templateParams = {
				name: data.name,
				object: data.object,
				email: data.email,
				message: data.message,
			};
			console.log(process.env);
			console.log(
				process.env.REACT_APP_SERVICE_PSD,
				process.env.REACT_APP_TEMPLATE_PSD
			);
			await emailjs.send(
				process.env.REACT_APP_SERVICE_PSD,
				process.env.REACT_APP_TEMPLATE_PSD,
				templateParams,
				process.env.REACT_APP_USER_PSD
			);

			reset();
			toastifySuccess();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div>
			<div>
				<div class='bg-contact100'>
					<div class='container-contact100'>
						<div class='container'>
							<div class='section-intro text-center padding-title100  '>
								<h2 class='primary-text color-title'>Contact Us</h2>
							</div>
						</div>
						<div class='wrap-contact100'>
							<div class='contact100-pic js-tilt' data-tilt>
								<img src='image/ContactUs/MailImage.svg' alt='IMG'></img>
							</div>
							<form
								class='contact100-form validate-form'
								id='contact-form'
								onSubmit={handleSubmit(onSubmit)}
							>
								<span class='contact100-form-title'>
									<h2>
										{' '}
										<i class='fas fa-envelope-open-text'></i> Email us
									</h2>
								</span>

								<div
									class='wrap-input100 validate-input'
									data-validate='Valid email is required: ex@abc.xyz'
								>
									<input
										class='input100'
										type='text'
										name='email'
										placeholder='Email'
										ref={register}
									/>
								</div>

								<div class='row'>
									<div class='col'>
										<div
											class='wrap-input100 validate-input '
											data-validate='name is required'
										>
											<input
												class='input100 name100'
												type='text'
												name='name'
												placeholder='Name'
												ref={register}
											/>
										</div>
									</div>
									<div class='col'>
										<div
											class='wrap-input100 validate-input '
											data-validate='object is required'
										>
											<input
												class='input100 object100'
												type='text'
												name='object'
												placeholder='Object'
												ref={register}
											/>
										</div>
									</div>
								</div>

								<div
									class='wrap-input100 validate-input'
									data-validate='Message is required'
								>
									<textarea
										class='input100'
										name='message'
										placeholder='Message'
										ref={register}
									/>
								</div>

								<div class='container-contact100-form-btn'>
									<button class='contact100-form-btn' type='submit'>
										Send
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
