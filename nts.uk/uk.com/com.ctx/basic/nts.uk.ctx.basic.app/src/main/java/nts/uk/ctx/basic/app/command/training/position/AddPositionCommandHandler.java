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
public class AddPositionCommandHandler extends CommandHandler<AddPositionCommand>{

	@Inject
	private PositionRepository positionRepository;
	
	@Override
	protected void handle(CommandHandlerContext<AddPositionCommand> context) {
		AddPositionCommand command = context.getCommand();
		String positionCode = AppContexts.user().positionCode();
		
		// check exists position
				Optional<Position> position = positionRepository.find(positionCode, command.getPositionCode());
				if (position.isPresent()) {
					throw new BusinessException("ER005");
				}
	}
}
