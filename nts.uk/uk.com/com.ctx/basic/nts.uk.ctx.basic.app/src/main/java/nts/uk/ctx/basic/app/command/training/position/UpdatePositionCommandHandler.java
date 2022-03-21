package nts.uk.ctx.basic.app.command.training.position;

import java.util.Optional;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.transaction.Transactional;

import nts.arc.error.BusinessException;
import nts.arc.layer.app.command.CommandHandler;
import nts.arc.layer.app.command.CommandHandlerContext;
import nts.uk.ctx.basic.dom.system.bank.Bank;
import nts.uk.ctx.basic.dom.training.position.Position;
import nts.uk.ctx.basic.dom.training.position.PositionRepository;
import nts.uk.shr.com.context.AppContexts;

@Stateless
@Transactional
public class UpdatePositionCommandHandler extends CommandHandler<UpdatePositionCommand>{

	@Inject
	private PositionRepository positionRepository;
	

	@Override
	protected void handle(CommandHandlerContext<UpdatePositionCommand> context) {
		UpdatePositionCommand command = context.getCommand();
		String positionCode = AppContexts.user().positionCode();
		
		// check exists bank
		Optional<Position> position = positionRepository.find(positionCode);
		if (!position.isPresent()) {
			throw new RuntimeException("Bank not found");
		}
				
		// create from java type 
		Bank domain = Bank.createFromJavaType(command.getPositionCode(), command.getPositionName());
				
		// validate
		domain.validate();
				
		// update bank
		positionRepository.update(domain);
		
	}}
